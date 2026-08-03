"use client";

const BookedSessionLoading = () => {
  return (
    <>
      <style>{`
        .loading-container{
          min-height:70vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          overflow:hidden;
        }

        .scene{
          position:relative;
          width:260px;
          height:220px;
        }

        /* Desk */

        .desk{
          position:absolute;
          bottom:0;
          width:100%;
          height:10px;
          background:linear-gradient(to right,#0ea5e9,#38bdf8);
          border-radius:999px;
          opacity:.9;
        }

        /* Book */

        .book{
          position:absolute;
          left:50%;
          bottom:20px;
          transform:translateX(-50%);
          width:170px;
          height:120px;
          perspective:1000px;
        }

        .cover{
          position:absolute;
          inset:0;
          border-radius:10px;
          background:linear-gradient(135deg,#0284c7,#0ea5e9);
          box-shadow:0 20px 40px rgba(14,165,233,.25);
        }

        .page{
          position:absolute;
          left:50%;
          top:6px;
          width:76px;
          height:108px;
          transform-origin:left;
          border-radius:0 8px 8px 0;
          background:white;
          box-shadow:0 0 10px rgba(0,0,0,.08);
        }

        .dark .page{
          background:#1e293b;
        }

        .page:nth-child(2){
          animation:flip 1.6s infinite;
        }

        .page:nth-child(3){
          animation:flip 1.6s .35s infinite;
        }

        .page:nth-child(4){
          animation:flip 1.6s .7s infinite;
        }

        @keyframes flip{
          0%{
            transform:rotateY(0deg);
          }
          40%{
            transform:rotateY(-170deg);
          }
          100%{
            transform:rotateY(-170deg);
          }
        }

        /* Pencil */

        .pencil{
          position:absolute;
          right:22px;
          bottom:80px;
          width:95px;
          height:8px;
          border-radius:999px;
          background:linear-gradient(to right,#facc15,#f59e0b);
          transform:rotate(-18deg);
          animation:pencil 2s ease-in-out infinite;
        }

        .pencil::after{
          content:"";
          position:absolute;
          right:-12px;
          width:0;
          height:0;
          border-left:12px solid #d97706;
          border-top:4px solid transparent;
          border-bottom:4px solid transparent;
        }

        @keyframes pencil{
          0%,100%{
            transform:rotate(-18deg) translateY(0);
          }
          50%{
            transform:rotate(-14deg) translateY(-8px);
          }
        }

        /* Coffee */

        .coffee{
          position:absolute;
          left:18px;
          bottom:75px;
          width:38px;
          height:32px;
          border-radius:0 0 8px 8px;
          background:#ffffff;
          border:3px solid #cbd5e1;
        }

        .dark .coffee{
          background:#334155;
          border-color:#475569;
        }

        .coffee::after{
          content:"";
          position:absolute;
          right:-10px;
          top:7px;
          width:10px;
          height:12px;
          border:3px solid #cbd5e1;
          border-left:none;
          border-radius:0 8px 8px 0;
        }

        .steam{
          position:absolute;
          left:11px;
          top:-20px;
          width:4px;
          height:18px;
          background:#cbd5e1;
          border-radius:999px;
          animation:steam 2s infinite;
        }

        .steam:nth-child(2){
          left:19px;
          animation-delay:.4s;
        }

        .steam:nth-child(3){
          left:27px;
          animation-delay:.8s;
        }

        @keyframes steam{
          0%{
            opacity:0;
            transform:translateY(8px);
          }
          50%{
            opacity:.7;
          }
          100%{
            opacity:0;
            transform:translateY(-14px);
          }
        }

        /* Text */

        .loading-title{
          margin-top:36px;
          font-size:1.5rem;
          font-weight:700;
          background:linear-gradient(
            90deg,
            #0ea5e9,
            #38bdf8,
            #0ea5e9
          );
          background-size:200%;
          color:transparent;
          -webkit-background-clip:text;
          animation:shine 2.5s linear infinite;
        }

        .loading-sub{
          margin-top:8px;
          color:rgb(100 116 139);
          font-size:.95rem;
        }

        @keyframes shine{
          from{
            background-position:0%;
          }
          to{
            background-position:200%;
          }
        }

        /* Dots */

        .dots{
          display:flex;
          gap:8px;
          margin-top:18px;
        }

        .dot{
          width:10px;
          height:10px;
          border-radius:999px;
          background:#0ea5e9;
          animation:dot 1.2s infinite;
        }

        .dot:nth-child(2){
          animation-delay:.2s;
        }

        .dot:nth-child(3){
          animation-delay:.4s;
        }

        @keyframes dot{
          0%,80%,100%{
            transform:scale(.7);
            opacity:.4;
          }
          40%{
            transform:scale(1.3);
            opacity:1;
          }
        }
      `}</style>

      <div className="loading-container">
        <div className="scene">
          <div className="coffee">
            <span className="steam"></span>
            <span className="steam"></span>
            <span className="steam"></span>
          </div>

          <div className="book">
            <div className="cover"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
          </div>

          <div className="pencil"></div>

          <div className="desk"></div>
        </div>

        <h2 className="loading-title">Loading Your Booked Sessions...</h2>

        <p className="loading-sub">Preparing your learning dashboard</p>

        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </>
  );
};

export default BookedSessionLoading;
