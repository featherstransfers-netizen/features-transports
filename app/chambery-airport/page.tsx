import AirportOverview from "@/component/AirportOverview";
import AirportDetail from "@/component/sections/AirportDetail";
import HeroSection2 from "@/component/sections/HeroSection2";
import InfoCard from "@/component/sections/InfoCard";
import ProcedureSection from "@/component/sections/ProcedureSection";
import { Car, CheckCircle, FileText } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function AirportGeneva(){
   const airportData = {
    title: "Chambery Airport Overview",
    description: [
      "Despite its modest size compared to major French airports, Chambéry can handle a surprisingly considerable number of passengers during peak times. It’s small but efficient terminal design, with emphasis on quick transfers, and proximity to local ski resorts mean that travellers can often reach their final destinations faster than if they flew into larger, more congested airports. On a good day, the transfer time to La Plagne is just one-and-a-half hours. ",

      "One of the most fascinating aspects for pilots and aviation fans is the airport’s notoriously challenging approach. Surrounded by mountains and water, Chambéry Airport’s single runway requires pilots to execute precise landings, often in unpredictable weather. ",
      "Fog, crosswinds, and rapidly changing Alpine conditions mean that landings and take-offs demand an elevated level of skill and experience and consequently pilots receive specialized training to operate safely at Chambéry. ",
    
    ],
    imageUrl: "/airport2.jpg",
    imageAlt: "Aerial view of Geneva Airport"
  };

  const stepsData = [
  {
    icon: <FileText className="w-8 h-8" />,
    stepTitle: 'Step 1: Documentation',
    description: 'Complete all necessary paperwork for the procedure before starting.'
  },
  {
    icon: <Car className="w-8 h-8" />,
    stepTitle: 'Step 2: Vehicle Inspection',
    description: 'Ensure the vehicle passes the required safety inspection.'
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    stepTitle: 'Step 3: Final Approval',
    description: 'Submit for final approval after all checks are complete.'
  },
];
    return(
        <>
          <HeroSection2
        height="50vh" 
        bgImage="/airport2.jpg"
        title="Chambery Airport (LATA Code: CMF) "
        description="Chambery Airport, officially known as Chambéry Savoie Mont Blanc Airport is situated in the heart of the picturesque Savoie region of France."
      />
       <AirportDetail
        location='Just 4km northwest of Geneva city centre'
        transferTime='2.5 hours to La Plagne'
        amenities='Free Wi-Fi available throughout'
      />
      <AirportOverview
        title={airportData.title}
        description={airportData.description}
        imageUrl={airportData.imageUrl}
        imageAlt={airportData.imageAlt}
      />
       <ProcedureSection sectionTitle="Procedure Steps" steps={stepsData} />
        <div style={{ padding: '20px' }}>
      <InfoCard
        title="Traveling from Chambery Airport"
        description="Chambery Airport is one of only three Category C airports in France whose runway can only be landed on by experienced pilots who have had specific simulator training on airports with a challenging approach!"
        icon={<FaMapMarkerAlt size={24} />} 
      />
    </div>
    
        </>
    )
}