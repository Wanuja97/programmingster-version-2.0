import React,{useState} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Styles from "../styles/HomeCategoryTabs.module.scss";
import client from './../client'
export default function HomeCategoryTabs() {
 const [key, setKey] = useState('all');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="all" title="All Posts">
          
            <div className={Styles.cardgroup}>
            <Card className={Styles.card} >
              <Card.Img variant="top" src="/image.jpg" alt="test"/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className={Styles.card} >
              <Card.Img variant="top" src="/image.jpg" alt="test"/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className={Styles.card} >
              <Card.Img variant="top" src="/image.jpg" alt="test"/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className={Styles.card} >
              <Card.Img variant="top" src="/image.jpg" alt="test"/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className={Styles.card} >
              <Card.Img variant="top" src="/image.jpg" alt="test"/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </div>
        
        </Tab>
        <Tab eventKey="htmlcss" title="HTML &amp; CSS">
        <div className={Styles.cardgroup}>
        <Card className={Styles.card} >
              <Card.Img variant="top" src="/image.jpg" alt="test"/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
        </div>
        </Tab>
        <Tab eventKey="reactjs" title="ReactJS">
          ReactJS
        </Tab>
        {/* <Tab eventKey="backend" title="Backend Technologies">
          Backend
        </Tab> */}
        <Tab eventKey="other" title="Other">
          ReactJS
        </Tab>
      </Tabs>
    </div>
  );
}
