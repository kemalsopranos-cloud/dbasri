import { Calendar, Trash2, Shield, Info, Clock } from 'lucide-react';
import { Language, Appointment } from '../types';
import { uiTranslations } from '../translations';
import { getExpertiseItems } from '../data';

interface AppointmentHistoryProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
}

export default function AppointmentHistory({
  language,
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
}: AppointmentHistoryProps) {
  const t = uiTranslations[language];
  const specialties = getExpertiseItems(language);

  if (!isOpen) return null;

  const handleCancelClick = (id: string) => {
    const message = t.historyCancelConfirm;
    if (window.confirm(message)) {
      onCancelAppointment(id);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
        id="appointment-history-modal"
      >
        {/* Sticky modal bar */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-6 flex justify-between items-center z-10">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              {t.historyTitle}
            </span>
          </div>
          <button
            id="close-history-modal"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-full transition-colors focus:outline-none"
            aria-label="Close panel"
          >
            <span className="text-xs px-2 py-1 font-semibold block">{t.expertiseModalClose}</span>
          </button>
        </div>

        {/* Modal body list container */}
        <div className="p-6 sm:p-8">
          {appointments.length === 0 ? (
            /* EMPTY HISTORY VIEW */
            <div className="text-center py-12 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 text-slate-600 border border-slate-800 mb-2">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-slate-400 text-sm">
                {t.historyNoRecords}
              </p>
            </div>
          ) : (
            /* ACTIVE BOOKING ITEMS LIST */
            <div className="space-y-4">
              {appointments.map((apt) => {
                const topicLabel = specialties.find((s) => s.id === apt.topicId)?.title || apt.topicId;

                return (
                  <div
                    key={apt.id}
                    className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl relative space-y-3 hover:border-slate-700 transition-colors"
                  >
                    {/* ID and Status badge row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-500">
                        REF: {apt.id.substring(4, 11).toUpperCase()}
                      </span>

                      {/* Dynamic status colored pill */}
                      <span
                        className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${
                          apt.status === 'confirmed'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : apt.status === 'cancelled'
                            ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                        }`}
                      >
                        {apt.status === 'confirmed'
                          ? t.historyStatusConfirmed
                          : apt.status === 'cancelled'
                          ? t.historyStatusCancelled
                          : t.historyStatusPending}
                      </span>
                    </div>

                    {/* Patient detail */}
                    <div className="space-y-1.5 pt-1">
                      <h4 className="text-white text-sm font-semibold">{apt.fullName}</h4>
                      <p className="text-xs text-amber-400 font-medium">
                        {apt.preferredDate} @ {apt.preferredTime}
                      </p>
                      <p className="text-xs text-slate-400">
                        <strong className="text-slate-500">{t.appointmentFormTopic}:</strong> {topicLabel}
                      </p>
                      {apt.notes && (
                        <p className="text-xs text-slate-500 leading-normal max-w-md truncate bg-slate-900/40 p-2 rounded border border-slate-850/50 mt-1">
                          "{apt.notes}"
                        </p>
                      )}
                    </div>

                    {/* Meta tracking line & Cancel Option */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-900 text-[10px] text-slate-500">
                      <span>
                        {t.historyCardCreated}: {new Date(apt.createdAt).toLocaleDateString(language === 'TR' ? 'tr-TR' : 'en-US')}
                      </span>

                      {apt.status === 'pending' && (
                        <button
                          id={`cancel-btn-${apt.id}`}
                          onClick={() => handleCancelClick(apt.id)}
                          className="inline-flex items-center space-x-1 text-red-400 hover:text-red-300 font-bold focus:outline-none"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{t.historyButtonCancel}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center space-x-2.5 bg-slate-950/20 border border-slate-850 p-4 rounded-xl text-xs text-slate-400">
                <Info className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  {language === 'TR'
                    ? 'Klinik onay süreçleri hakkında asistanımız kayıtlı telefon numaranızdan sizi bilgilendirecektir.'
                    : 'Our clinical assistant will contact you via your registered phone number regarding scheduling approvals.'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
