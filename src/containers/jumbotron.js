// import './App.css';
import jumboData from '../fixtures/jumbo.json'
import Jumbotron from '../components/landing/body';


export function JumbotronContainer() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => {
          return <Jumbotron key={item.id} direction={item.direction} >
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            
              {/* <p>{item.alt}</p> */}
            </Jumbotron.Pane>
          </Jumbotron>
        }
        )}

      </Jumbotron.Container>
    </>
  );
}

