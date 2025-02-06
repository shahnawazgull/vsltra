import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const convertFormData = (data) => {
  let formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

export const onDownload = async (id, fileName, callback) => {
  const BASE_URL = process.env.REACT_APP_URL;
  const url = new URL(`${BASE_URL}/download/${id}/`);
  await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${cookie.get('access_token')}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        response.blob().then((blob) => {
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = fileName;
          link.click();
          if (callback) callback();
          // redirect to home page
          window.location.href = '/voice';
          toast.success('Download Success');
        });
      } else {
        response.json().then(data => {
          toast.warn(data.error)
        })
        toast.error('Download Failed');
        if (callback) callback();
      }
    })
    .catch((e) => {
      toast.warn(e.response.error)
      toast.error('Download Failed')
    });
};

export const formatterUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
