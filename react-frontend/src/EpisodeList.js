import React from "react";
import Axios from "axios";
import episodeApi from "./EpisodeApi";
import { Card, Col, Row } from "antd";

//class 컴포넌트를 사용하지 않는 이유
// clss가 코드 재사용성과 코드 구성을 더 어렵게 만든다.
// this. 는 언어마다 다르며, 이벤트 핸들러가 등록되는 방법을 기억해야만 한다.
// 부수적으로 작성해야하는 코드가 많다.
// 서로 연관성없는 다수의 로직을 하나의 생명주기 메서드에서 구현하는 경우가 많다.
// componentDidMount에서 등록하고 componentWillUnmount에서 해제를 깜빡할 수 있다.

// 해결 방법 -> Hook을 활용해서 함수형 컴포넌트로 해결 가능

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