// Types of actions that can be dispatched to modify the state of the store
const INCREMENT_PANEL_ID = 'INCREMENT_PANEL_ID';
const DECREMENT_PANEL_ID = 'DECREMENT_PANEL_ID';

// Dispatch actions, optionally with payloads
export const incrementPanelId = () => ({ type: INCREMENT_PANEL_ID });
export const decrementPanelId = () => ({ type: DECREMENT_PANEL_ID });

// Handle actions and update the state of the store
export default function reducer( state = { activePanel: 1 }, action ) {
  switch( action.type ) {
    case INCREMENT_PANEL_ID: {
      return {
        ...state, 
        activePanel: state.activePanel + 1
      };
    }
    case DECREMENT_PANEL_ID: {
      return {
        ...state, 
        activePanel: state.activePanel - 1
      };
    }
    default: {
      return state;
    }
  }
};