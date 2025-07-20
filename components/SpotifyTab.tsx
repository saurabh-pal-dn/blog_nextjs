import useSWR from 'swr';
const imageUrls = [
  'https://i.scdn.co/image/ab67616d0000b273f10439addbeefd4ecc1dd9d7',
  'https://i.scdn.co/image/ab67616d0000b273982320da137d0de34410df61',
  'https://i.scdn.co/image/ab67616d0000b2737a7e086c8705b91d247c2c24',
  'https://i.scdn.co/image/ab67616d0000b2730c5b0b80fa8f564ddd3328c3',
  'https://i.scdn.co/image/ab67616d0000b2732c920431e9c8d1a9b632bcd0',
  'https://i.scdn.co/image/ab67616d0000b27313c6cb6a81c8db4dbc8b9924',
  'https://i.scdn.co/image/ab67616d0000b2732a46046339bd779f95a8cf8b',
];

const SpotifyTab = (): JSX.Element => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data: song } = useSWR('/api/spotify', fetcher, {
    refreshInterval: 5 * 1000,
    fallbackData: 'loading',
  });
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const backgroundImageurl = imageUrls[randomIndex];

  return (
    <>
      <div className="css-foz3qc">
        <div
          className="css-ewsei0"
          style={{
            background: `url(${backgroundImageurl})`,
          }}
        >
          <div className="chakra-skeleton css-cdkrf0">
            <img
              alt="Spotify album cover"
              className="chakra-image css-1febq2i"
              width={'100px'}
              height={'100px'}
              src={
                song.album?.image ||
                'https://i.scdn.co/image/ab67616d0000b273982320da137d0de34410df61'
              }
            />
          </div>

          <div className="chakra-stack css-1meimlm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="chakra-link css-mxtkhh"
              href={
                song.url ||
                'https://open.spotify.com/track/7DY756WOLyOz2Xnhw4EFiC'
              }
            >
              <p className="chakra-text css-i3jkqk">
                {song.title || 'São Paulo (feat. Anitta)'}
              </p>
            </a>
            <p className="chakra-text css-1vsww04">
              {song.artists?.name[0] || 'The Weeknd'}
            </p>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            focusable="false"
            className="chakra-icon css-hjkpk0"
            name="spotify"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SpotifyTab;
