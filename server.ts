import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import { createServer as createViteServer } from 'vite';

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
