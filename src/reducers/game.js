import uuid from 'uuid'
import {
  SUCCESS_SET_WINNER,
  SET_FIELD,
  SET_USER_FIELD,
  SET_COMPUTER_FIELD,
  START_AGAIN
} from '../actions/game';
const i = [
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  },
  {
    id: uuid(),
    isBlue: false,
    isRed: false,
    isGreen: false,
    isActive: true
  }
]
const initialState = {
  gameWinner: '',
  fields: [...i.map(d => { return { ...d } })]
};

export default function serverData(state = initialState, action) {
  const { type, gameWinner, id } = action;

  switch (type) {
    case SUCCESS_SET_WINNER:
      return { ...state, gameWinner };
    case SET_FIELD:
      return {
        ...state, fields: state.fields.map(field => {
          const newField = field;

          if (newField.isBlue) {
            newField.isRed = true;
            newField.isBlue = false;
            newField.isActive = false;
          }

          if (newField.id === id) {
            newField.isBlue = true;
            newField.isActive = false;
          }

          return { ...newField };
        })
      }
    case SET_USER_FIELD:
      return {
        ...state, fields: state.fields.map(field => {
          const newField = field;

          if (newField.id === id) {
            newField.isGreen = true;
            newField.isBlue = false;
            newField.isActive = false;
          }

          return { ...newField };
        })
      };
    case SET_COMPUTER_FIELD:
      return {
        ...state, fields: state.fields.map(field => {
          const newField = field;

          if (newField.isBlue) {
            newField.isRed = true;
            newField.isBlue = false;
            newField.isActive = false;
          }

          return { ...newField };
        })
      }
    case START_AGAIN:
      return {
        gameWinner: initialState.gameWinner,
        fields: [...i.map(d => { return { ...d } })]
      }
    default:
      return state;
  }
}
