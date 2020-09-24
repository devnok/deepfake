import { apiClient } from '.';

export const uploadVideo = ({ file }) => {
  const formData = new FormData();
  formData.append('file', file);
  return apiClient.post('video', formData, {
    headers: {
      'Content-Type': 'multipart/formdata',
    },
  });
};
export const uploadImage = ({ file }) => {
  const formData = new FormData();
  formData.append('file', file);
  return apiClient.post('image', formData, {
    headers: {
      'Content-Type': 'multipart/formdata',
    },
  });
};

export const isVideoDone = ({ filename }) => {
  return apiClient.get('done/video/' + filename);
};

export const fetchDetectsVideo = ({ filename }) => {
  return apiClient.get('detects/video/' + filename);
}