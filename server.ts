import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());


  const postsFilePath = path.join(process.cwd(), 'src', 'custom_posts.json');

  // Helper to read posts from custom_posts.json safely
  async function readPosts() {
    try {
      const data = await fs.readFile(postsFilePath, 'utf8');
      return JSON.parse(data);
    } catch (e) {
      console.error('Error reading custom posts file:', e);
      return [];
    }
  }

  // Helper to write posts to custom_posts.json safely
  async function writePosts(posts: any[]) {
    try {
      await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2), 'utf8');
    } catch (e) {
      console.error('Error writing custom posts file:', e);
    }
  }

  // API: Get custom posts
  app.get('/api/posts', async (req, res) => {
    try {
      const posts = await readPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read posts' });
    }
  });

  // API: Add custom post
  app.post('/api/posts', async (req, res) => {
    try {
      const newPost = req.body;
      if (!newPost || !newPost.id) {
        return res.status(400).json({ error: 'Invalid post data' });
      }

      const posts = await readPosts();
      // Prepend the new post so it appears first
      const updatedPosts = [newPost, ...posts];
      await writePosts(updatedPosts);

      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save post' });
    }
  });

  // API: Delete custom post
  app.delete('/api/posts/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const posts = await readPosts();
      const updatedPosts = posts.filter((post: any) => post.id !== id);
      await writePosts(updatedPosts);

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete post' });
    }
  });

  // API: Send Appointment Mail Notifications
  app.post('/api/appointments', async (req, res) => {
    try {
      const appointment = req.body;
      if (!appointment || !appointment.fullName) {
        return res.status(400).json({ error: 'Invalid appointment data' });
      }

      console.log('New Appointment Received:', appointment);

      const targetEmails = ['drbasri@gmail.com', 'info@basricakiroglu.com.tr', 'bcakiroglu@hisarhospital.com'];
      const mailSubject = `[Yeni Randevu Talebi] ${appointment.fullName} - ${appointment.preferredDate}`;

      const mailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff; color: #333333;">
          <h2 style="color: #0b1a30; border-bottom: 2px solid #c5a880; padding-bottom: 10px; margin-top: 0;">Yeni Randevu Talebi</h2>
          <p style="font-size: 14px; line-height: 1.5; color: #555555;">Web siteniz üzerinden yeni bir randevu talebi oluşturuldu. Detaylar aşağıdadır:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; width: 160px; border-bottom: 1px solid #eeeeee;">Ad Soyad:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${appointment.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Telefon:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><a href="tel:${appointment.phone}" style="color: #0b1a30; text-decoration: none; font-weight: bold;">${appointment.phone}</a></td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee;">E-posta:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><a href="mailto:${appointment.email}" style="color: #0b1a30; text-decoration: none;">${appointment.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Tercih Edilen Tarih:</td>
              <td style="padding: 10px; color: #c5a880; font-weight: bold; border-bottom: 1px solid #eeeeee;">${appointment.preferredDate}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Tercih Edilen Saat:</td>
              <td style="padding: 10px; color: #c5a880; font-weight: bold; border-bottom: 1px solid #eeeeee;">${appointment.preferredTime}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Uzmanlık / Konu ID:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${appointment.topicId}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Notlar:</td>
              <td style="padding: 10px; font-style: italic; border-bottom: 1px solid #eeeeee;">${appointment.notes || 'Not belirtilmemiş.'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Talep Tarihi:</td>
              <td style="padding: 10px; font-size: 11px; color: #666666;">${appointment.createdAt || new Date().toISOString()}</td>
            </tr>
          </table>
          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 11px; color: #888888; text-align: center;">
            Bu e-posta Prof. Dr. Basri Çakıroğlu web sitesi randevu sistemi tarafından otomatik olarak oluşturulmuştur.
          </div>
        </div>
      `;

      let emailSent = false;
      let errorDetails = '';

      const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

      if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT || 587),
            secure: Number(SMTP_PORT) === 465,
            auth: {
              user: SMTP_USER,
              pass: SMTP_PASS,
            },
          });

          await transporter.sendMail({
            from: SMTP_FROM || SMTP_USER,
            to: targetEmails.join(', '),
            subject: mailSubject,
            html: mailHtml,
          });

          emailSent = true;
          console.log(`Success: Appointment notification emails sent to ${targetEmails.join(', ')}`);
        } catch (mailError: any) {
          console.error('Nodemailer error:', mailError);
          errorDetails = mailError.message || String(mailError);
        }
      } else {
        console.log('--- EMAIL SIMULATION (SMTP Not Configured) ---');
        console.log(`To: ${targetEmails.join(', ')}`);
        console.log(`Subject: ${mailSubject}`);
        console.log('Body HTML length:', mailHtml.length);
        console.log('----------------------------------------------');
      }

      res.status(200).json({
        success: true,
        emailSent,
        simulated: !SMTP_HOST,
        errorDetails: errorDetails || undefined,
        appointment,
      });
    } catch (err: any) {
      console.error('Appointment API error:', err);
      res.status(500).json({ error: 'Failed to process appointment' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
