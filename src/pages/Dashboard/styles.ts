import { styled } from "../../config/stitches.config";

export const Container = styled('main', {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  section: {
    marginTop: '6.4rem',
    width: '100%',
    maxWidth: '96rem',

    header: {
      h1: {
        fontSize: '$xxlarge',
      },

      span: {
        color: '$colorNeutral',
      },
    }
  },
});

export const Form = styled('form', {
  display: 'flex',
  marginTop: '6.4rem',
  width: '100%',
  height: '6.4rem',

  input: {
    flex: 1,
    marginRight: '.8rem',
    padding: '0 2.4rem',
    border: 0,
    background: '#f9f9f9',
    borderRadius: '.8rem',

    '&::placeholder': {
      color: '#bcc2c8',
    }
  },

  button: {
    width: '6.4rem',
    background: '#06d6a0'
  }
});

export const Participants = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '3.2rem',

  h2: {
    marginBottom: '.8rem',
  },
});

export const Card = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '.8rem',

  height: '6.4rem',

  div: {
    display: 'flex',
    flex: 1,
    height: '100%',
    padding: '2.4rem',
    alignItems: 'center',

    marginRight: '.8rem',
    border: 0,
    background: '#213547',
    borderRadius: '.8rem',

    strong: {
      color: '#fff',
    },
  },

  button: {
    height: '100%',
    width: '6.4rem',
    background: '#ed1c24'
  }
})
