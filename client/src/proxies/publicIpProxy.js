import publicIp from 'public-ip';

export const getIpAdress = async () => {
  try {
    return publicIp.v4();
  } catch (error) {
    console.log('Error getting public Ip Address', error.message);
  }
};
