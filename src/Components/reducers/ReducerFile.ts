import { type } from 'os';
// import { Action, Reducer } from 'redux';

export var initialState = {
    data: [
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: 'uo',
        },
        id: "uo",
    },
    {
        attributes: {
            name: 'uo',
        },
        id: "uo",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
]
}

interface foundSongs {
    data: [
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: 'uo',
        },
        id: "uo",
    },
    {
        attributes: {
            name: 'uo',
        },
        id: "uo",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
]
}

type Action = {
    type: "ADD_SONGS", payload: foundSongs,
}

export const changeSongs = (state: any = initialState, action: Action) => {
  switch (action.type) {
    // Handle different action types here
    case "ADD_SONGS": {
        return action.payload
    }

    default:
      return initialState;
  }
};