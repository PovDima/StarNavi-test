import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Progress from '@material-ui/core/CircularProgress';

import './Leader.css';

function Leader(props) {
    return (
        <div className={'componentWrapper'}>
            <p className={'header'}>Leader Board</p>
            {props.winners.length > 0 ?
                props.winners.map(winner => {
                    return (
                        <div key={winner.id} className={'row'}>
                            <div>{winner.winner}</div>
                            <div>{winner.date}</div>
                        </div>
                    )
                }) :
                <Progress />
            }
        </div>
    );
}

Leader.propTypes = {
    winners: PropTypes.array.isRequired
};

export default connect((state) => { return { winners: state.serverData.winners } })(Leader);
