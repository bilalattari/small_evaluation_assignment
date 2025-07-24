import connectDB from '@/lib/mongodb';
import Player from '@/models/Player';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    
    const search = searchParams.get('search');
    const approval = searchParams.get('approval');
    const status = searchParams.get('status');
    const sortBy = searchParams.get('sortBy') || 'points';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    
    let query = {};
    
    // Search by name, title, or ogCode
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { title: { $regex: search, $options: 'i' } },
        { ogCode: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filter by approval status
    if (approval && approval !== 'all') {
      query.approval = approval;
    }
    
    // Filter by status
    if (status && status !== 'all') {
      query.status = status;
    }
    
    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    
    // Calculate skip for pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const players = await Player.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
    
    // Get total count for pagination
    const total = await Player.countDocuments(query);
    
    return Response.json({
      players,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
} 