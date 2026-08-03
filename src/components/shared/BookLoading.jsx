

"use client";

const BookLoading = () => {
  return (
    <>
      <style>{`
        .loader{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          min-height:70vh;
        }

        .books{
          position:relative;
          width:110px;
          height:80px;
        }

        .book{
          position:absolute;
          width:52px;
          height:70px;
          border-radius:8px;
          background:linear-gradient(180deg,#0ea5e9,#0284c7);
          box-shadow:0 10px 20px rgba(0,0,0,.15);
        }

        .left{
          left:0;
          animation:leftBook 1.2s ease-in-out infinite;
        }

        .right{
          right:0;
          animation:rightBook 1.2s ease-in-out infinite;
        }

        .page{
          position:absolute;
          inset:6px;
          border-radius:5px;
          background:white;
        }

        .dark .page{
          background:#1e293b;
        }

        .text{
          margin-top:40px;
          font-size:20px;
          font-weight:700;
          background:linear-gradient(90deg,#0ea5e9,#38bdf8,#0ea5e9);
          background-size:200%;
          -webkit-background-clip:text;
          color:transparent;
          animation:shine 2s linear infinite;
        }

        .sub{
          margin-top:8px;
          color:rgb(100 116 139);
          font-size:14px;
        }

        .dots{
          display:flex;
          gap:8px;
          margin-top:18px;
        }

        .dots span{
          width:8px;
          height:8px;
          border-radius:999px;
          background:#0ea5e9;
          animation:bounce 1s infinite;
        }

        .dots span:nth-child(2){
          animation-delay:.15s;
        }

        .dots span:nth-child(3){
          animation-delay:.3s;
        }

        @keyframes leftBook{
          0%,100%{transform:translateY(0) rotate(-6deg)}
          50%{transform:translateY(-12px) rotate(-10deg)}
        }

        @keyframes rightBook{
          0%,100%{transform:translateY(-12px) rotate(6deg)}
          50%{transform:translateY(0) rotate(10deg)}
        }

        @keyframes bounce{
          0%,80%,100%{
            transform:translateY(0);
            opacity:.4;
          }
          40%{
            transform:translateY(-10px);
            opacity:1;
          }
        }

        @keyframes shine{
          from{background-position:0%}
          to{background-position:200%}
        }
      `}</style>

      <div className="loader">
        <div className="books">
          <div className="book left">
            <div className="page"></div>
          </div>

          <div className="book right">
            <div className="page"></div>
          </div>
        </div>

        <h2 className="text">Loading Tutor...</h2>

        <p className="sub">Preparing your learning session</p>

        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default BookLoading;