import React from "react";
import Axios from "axios";

class EpisodeList extends React.Component {
    state = {
        episodeList: [],
    }

    async componentDidMount() {
        const apiURL = 'http://api.tvmaze.com/singlesearch/shows';
        const params = {
            q:'earth',
            embed : 'episodes',
        };
        try {
            const response = await Axios.get(apiURL, {params});
            const { data : {_embedded : {episodes }} } = response;
                // data._embedded.episodes; 
                // console.log(episodes);
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
                {JSON.stringify(episodeList)}
            </div>
        );
    }
}

export default EpisodeList;