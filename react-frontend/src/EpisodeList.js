import React from "react";
import Axios from "axios";
import episodeApi from "./EpisodeApi";
class EpisodeDetail extends React.Component {
    state = {
        episode : this.props.episode,
    }

    render(){
        const { episode: { id, name, image } } = this.state;
        // 이미지가 없음
        // const { episode : {id, name, image:{ medium: thumbUrl}}} = this.state;
        return (
            <div>
                {id}: {name}, {image}
                {/* 이미지가 없음 */}
                {/* <img src={thumbUrl} alt={name}/> */}
            </div>
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
                {
                    episodeList.map(episode =>
                        <EpisodeDetail episode={episode}/>         
                    )
                }
            </div>
        );
    }
}

export default EpisodeList;