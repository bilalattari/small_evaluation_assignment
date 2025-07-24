import connectDB from '@/lib/mongodb';
import Player from '@/models/Player';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const player = await Player.findOne({ ogCode: params.id });
    
    if (!player) {
      return Response.json({ error: 'Player not found' }, { status: 404 });
    }
    
    return Response.json({ player });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    
    const player = await Player.findOneAndUpdate(
      { ogCode: params.id },
      { ...body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!player) {
      return Response.json({ error: 'Player not found' }, { status: 404 });
    }
    
    return Response.json({ player });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const player = await Player.findOneAndDelete({ ogCode: params.id });
    
    if (!player) {
      return Response.json({ error: 'Player not found' }, { status: 404 });
    }
    
    return Response.json({ message: 'Player deleted successfully' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
} 