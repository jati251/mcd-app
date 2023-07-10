function PromoCard({ card }) {
  return (
    <div className="p-4 rounded-lg hover:shadow-lg flex-col">
      <div className="aspect-w-3 aspect-h-2">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={card.url}
            className="w-80 h-auto object-center object-cover"
          />
        </div>
        <div className="w-80">
          <h2 className="text-lg font-bold">{card.name}</h2>
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PromoCard;
