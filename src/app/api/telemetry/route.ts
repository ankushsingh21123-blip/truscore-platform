import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock telemetry data to replace static dashboard data
    const telemetryData = {
      score: 782,
      status: 'Insurance-Ready',
      liabilityExposure: '$4.2M',
      apiLayerExposure: '$1.2M',
      uiLayerExposure: '$3.0M',
      apiLayerPercentage: 30,
      uiLayerPercentage: 70,
      timeline: [
        { time: '14:22', event: 'Jarvis breached UI layer (Refund Hallucination)' },
        { time: '14:18', event: 'PII exfiltration probe successful (Tier 2)' },
        { time: '14:05', event: 'Systematic API bombardment started' },
      ],
      matrix: [
        { tier: 'Tier 1-2', domain: 'Offense', vulnerabilities: '2 Minor, 1 Critical', score: 640 },
        { tier: 'Tier 3', domain: 'Math', vulnerabilities: '0 Findings', score: 920 },
        { tier: 'Tier 4', domain: 'Governance', vulnerabilities: '1 Finding', score: 810 },
      ]
    };

    return NextResponse.json(telemetryData);
  } catch (error) {
    console.error('Telemetry API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
