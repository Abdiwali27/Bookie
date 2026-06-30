 import { X } from "lucide-react"

const Modal = ({children, title, isOpen, onClose}) => {
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-10 sm:p-0">
  <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"></div>

  <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden z-10 animate-in zoom-in-95 duration-200">
    <div className="flex justify-between items-center p-6 border-b border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900">
        {title}
      </h2>

      <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
        <X size={20} />
      </button>
    </div>
    <div className="p-6 max-h-{80vh} overflow-y-auto">
        {children}
    </div>
  </div>
</div>
  )
}

export default Modal
