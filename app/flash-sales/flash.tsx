
import Image from "next/image";


interface FlashSaleCardProps {
  imageSrc: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
}

const FlashSaleCard = ({
  imageSrc,
  title,
  originalPrice,
  discountedPrice,
  discountPercentage,
  rating,
  reviewCount,
}: FlashSaleCardProps) => {
  return (
    <div style={{
      width: '300px',
      height: '500px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // padding: '1px',
      
    }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: '#ff4444',
        color: 'white',
        // padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '14px',
      }}>
        -{discountPercentage}%
      </div>
      <div style={{ width: '100%', height: '150px', position: 'relative' }}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <h3 style={{ fontSize: '16px', textAlign: 'center' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <span style={{ textDecoration: 'line-through', color: '#888' }}>
          ${originalPrice}
        </span>
        <span style={{ fontWeight: 'bold', color: '#000' }}>
          ${discountedPrice}
        </span>
      </div>
      <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginTop: '5px' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: i < rating ? '#ffd700' : '#ccc' }}>
            ★
          </span>
        ))}
        <span style={{ fontSize: '12px', color: '#666' }}>({reviewCount})</span>
      </div>
      
    </div>
  );
};

export default FlashSaleCard;