import { NextApiRequest, NextApiResponse } from 'next';
import { SpotifyService } from 'spotify-now-playing';

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const spotify = new SpotifyService(
    process.env.SPOTIFY_CLIENT_ID,
    process.env.SPOTIFY_CLIENT_SECRETS,
    process.env.SPOTIFY_CODE
  );
  const song = await spotify.getCurrentSong();
  res.json(song);
}
