import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MajorOrder() {
    return (
        <Card className='majorOrder'>
            <Card.Header className='majorOrderHeader'>MAJOR ORDER</Card.Header>
            <Card.Body>
                <Card.Text className='majorOrderText'>
                    Liberate the despicable Automaton Petafactory on Varylia 5 so it may be converted into an EXO-49 EMANCIPATOR EXOSUIT factory.
                </Card.Text>
                <Card.Title className='orderOverviewTitle'>
                    ORDER OVERVIEW
                </Card.Title>
                <Card.Text className='orderOverviewText'>
                    Liberate the designated planet.
                </Card.Text>
                <Card.Text className='orderOverviewTitle'>
                    VARYLIA 5
                </Card.Text>
                <div className='majorOrderRewardCard'>
                    <h1>REWARD</h1>
                    <div className='majorOrderRewardAmountCard'>
                        <img src="./medal.png" alt="" />
                        <h2>50</h2>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MajorOrder;