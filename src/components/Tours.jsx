import Card from './Card'
const Tours = ({data,removeTour}) => {
    
    return ( <div className='container'>
       { data.map(((tour)=>{

            return <Card key={tour.id} {...tour} removetour={removeTour}/> 
        }))}
        </div>
        );
}
 
export default Tours;
