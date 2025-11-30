import {useToastStore} from '../../store/toastStore';

export function ToastContainer() {
  const toasts = useToastStore(s => s.toasts);
  const removeToast = useToastStore(s => s.removeToast);

  return (
    <div className="fixed top-22 left-1/2 -translate-x-1/2 space-y-2 z-20">
      {toasts.map(t => (
        <div
          key={t.id}
          className="flex items-center justify-between min-w-3xs bg-black text-white px-6 py-2.5 rounded-xl animate-fade-in shadow-lg"
        >
          <span> {t.message}</span>

          <button
            onClick={() => {
              removeToast(t.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
