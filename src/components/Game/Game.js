import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import {
    TextField,
    Button,
    MenuItem,
} from '@material-ui/core/'
import * as GameActions from '../../actions/game';

import './Game.css';

class Game extends PureComponent {
    static propTypes = {
        settings: PropTypes.object.isRequired,
        gameWinner: PropTypes.string.isRequired,
        setWinner: PropTypes.func.isRequired,
        fields: PropTypes.array.isRequired,
        startAgain: PropTypes.func.isRequired,
        setUserField: PropTypes.func.isRequired
    }

    state = {
        mode: '',
        winner: ''
    }

    startGame = () => {
        const { setActiveField, fields, settings, setComputerField, setWinner } = this.props;
        const { mode, winner } = this.state;
        const activeArr = fields.filter(field => field.isActive);

        if ((fields.length - activeArr.length) >= settings[mode].field) {
            const computerFields = fields.filter(f => f.isRed).length;
            const userFileds = fields.filter(f => f.isGreen).length;
            setComputerField();
            setWinner({ winner: userFileds > computerFields ? winner : 'Computer', date: moment().format('HH:mm; DD MMMM YYYY') })
            clearInterval(this.interval)
        } else {
            const { id } = activeArr[Math.floor(Math.random() * activeArr.length)];
            setActiveField(id);
        }

    }

    handleChange = key => async e => {
        await this.setState({ [key]: e.target.value })
    }

    handleAgain = async () => {
        await this.props.startAgain();
        await this.handleStart()
    }

    handleStart = async () => {
        const { settings } = this.props;
        const { mode } = this.state;
        this.interval = setInterval(this.startGame, settings[mode].delay);
    }

    handleSetField = e => {
        this.props.setUserField(e.target.id);
    }

    renderInput = () => {
        const { settings, gameWinner } = this.props;
        const { mode, winner } = this.state;

        return (
            <div className={'inputBlock'}>
                <TextField
                    select
                    label="Pick game mode"
                    value={mode}
                    className={'input'}
                    onChange={this.handleChange('mode')}
                >
                    {Object.keys(settings).map(setting => (
                        <MenuItem key={settings[setting].field} value={setting}>
                            {setting}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    placeholder={'Enter your name'}
                    label={"Enter your name"}
                    value={winner}
                    onChange={this.handleChange('winner')}
                    className={'input'}
                />
                <Button
                    variant='contained'
                    className={'button'}
                    disabled={(!winner || !mode)}
                    onClick={gameWinner ? this.handleAgain : this.handleStart}
            >
                    {gameWinner ? 'Play Again' : 'Play'}
                </Button>
            </div >
        )
    }
    render() {
        const { gameWinner, fields } = this.props;

        return (
            <div className={'componentWrapper'}>
                {this.renderInput()}
                {gameWinner ? gameWinner : ''}
                <div className={'gameWrapper'}>
                    {fields.map(field => {
                        return (
                            <div
                                key={field.id}
                                id={field.id}
                                onClick={field.isBlue ? this.handleSetField : () => { }}
                                className={classNames('field',
                                    {
                                        'active': field.isBlue,
                                        'user': field.isGreen,
                                        'computer': field.isRed
                                    }
                                )}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        settings: state.serverData.settings,
        gameWinner: state.game.gameWinner,
        fields: state.game.fields
    }
}, { ...GameActions })(Game);
