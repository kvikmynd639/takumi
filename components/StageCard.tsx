
interface StageCardProps {
    name:string;
    img:string;
    description:string;
}

const StageCard: React.FC<StageCardProps> = ({name,img,description}) => {
    return(
        <div className="bg-[#1D2B53] rounded-lg shadow-lg p-4 m-2">
      <img src={img} className="w-full h-40 object-fill rounded-t-lg" alt={`${name} Stage`} />
      <div className="p-4">
        <h2 className="text-xl text-slate-100 font-bold mb-2">{name}</h2>
        <p className="text-gray-100">{description}</p>
      </div>
    </div>
    )
}

export default StageCard