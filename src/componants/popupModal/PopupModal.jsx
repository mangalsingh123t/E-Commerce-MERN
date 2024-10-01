
// eslint-disable-next-line react/prop-types
export const PopupModal = ({ show, onClose, message }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-md">
                <p>{message}</p>
                <button onClick={onClose} className="bg-red-500 text-white p-2 mt-4 rounded">Close</button>
            </div>
        </div>
    );
};
