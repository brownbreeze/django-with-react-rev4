import React from "react";
import Axios from "axios";
import episodeApi from "./EpisodeApi";
import { Card, Col, Row } from "antd";

class EpisodeDetail extends React.Component {
    state = {
        episode : this.props.episode,
    }

    render(){
        const { episode: { id, name, image } } = this.state;
        // 이미지가 없음
        // const { episode : {id, name, image:{ medium: thumbUrl}}} = this.state;
        return (
            <Card 
                style={{width:240}}
                cover={null}>
                <Card.Meta title={name}/>
                {/* 이미지가 없음 */}
                {/* <img src={thumbUrl} alt={name}/> */}

            </Card>
        );
    }
}
class EpisodeList extends React.Component {
    state = {
        episodeList: [],
    }
    // component가 생길때 딱! 
    async componentDidMount() {
        const apiURL = '/singlesearch/shows';
        const params = {
            q:'earth',
            embed : 'episodes',
        };
        try {
            const response = await episodeApi.get(apiURL, {params});
            const { data : {_embedded : {episodes }} } = response;
                // data._embedded.episodes; 
            console.log(episodes);
            this.setState({
                episodeList : episodes
            });
        }
        catch(error) {
            console.log(error);
        }              

    }

    render() {
        const { episodeList } = this.state;
        return ( 
            <div>
                <h1>EpisodeList</h1>
                <Row>
                {
                    episodeList.map(episode =>
                        <Col span={8}>
                            <EpisodeDetail episode={episode}/>         
                        </Col>
                    )
                }
                </Row>
            </div>
        );
    }
}

export default EpisodeList;