import connectDB from '@/lib/mongodb';
import Player from '@/models/Player';

export async function GET() {
  try {
    await connectDB();
    const players = await Player.find({}).sort({ score: -1 }).limit(10);
    return Response.json({ players });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const { 
      ogCode, 
      name, 
      title, 
      rank, 
      points, 
      attack, 
      defence, 
      status, 
      matches, 
      won, 
      approval, 
      profilePicture 
    } = body;
    
    if (!ogCode || !name || points === undefined) {
      return Response.json({ error: 'OG Code, name and points are required' }, { status: 400 });
    }
    
    const player = new Player({
      ogCode,
      name,
      title: title || 'Outsider',
      rank: rank || 'Bronze',
      points,
      attack: attack || { greenBomb: 0, blackBomb: 0, redBomb: 0 },
      defence: defence || 1,
      status: status || 'Active',
      matches: matches || 0,
      won: won || 0,
      approval: approval || 'Pending',
      profilePicture: profilePicture || ''
    });
    
    await player.save();
    return Response.json({ player }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}