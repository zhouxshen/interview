import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css"; // 引入 CSS 样式

export default function Modal({ isOpen, onClose, children }) {
  const [visible, setVisible] = useState(isOpen); // 控制动画

  useEffect(() => {
    if (isOpen) {
      setVisible(true); // 打开弹窗
    } else {
      setTimeout(() => setVisible(false), 300); // 关闭后等待动画完成再移除
    }
  }, [isOpen]);

  if (!visible) return null; // 避免不必要的渲染

  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div className={`modal-content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        {/* 关闭按钮 */}
        <button className="modal-close" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>,
    document.body
  )
}

/* 背景遮罩层 
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal-overlay.open {
  opacity: 1;
  visibility: visible;
}

弹窗内容
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-width: 90%;
  transform: scale(0.95);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-content.open {
  transform: scale(1);
  opacity: 1;
}

关闭按钮
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
}

.modal-close:hover {
  color: #000;
}

*/
