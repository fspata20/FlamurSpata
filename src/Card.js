const Card = ({title, text, foto}) => {
  return (
    <div className="card">
        <img src={foto} alt="Foto" style={{width:"100%"}}/>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{text}</p>
        </div>
    </div>
  );
};

export default Card;
