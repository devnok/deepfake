export const getInitials = name => {
  let initials = Array.prototype.map
    .call(name.split(' '), function(x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join('');
  return initials.substring(0, 2);
};
export const byte2mb = byte => (byte / 1000 / 1000).toFixed(1);
export const secondsFormat = s => {
  const sec = parseInt(s, 10);
  const time = [parseInt(sec / 3600, 10), parseInt(sec / 60, 10), sec % 60];
  return time.map(t => t.toString().padStart(2, '0')).join(':');
};
export const convertDetectToThumbnail = detect =>
  `http://c3.iptime.org:1488/thumbnail/detects/${
    detect.thumbnail.split('_')[0]
  }.mp4/${detect.id}`;
