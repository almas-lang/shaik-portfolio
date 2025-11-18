import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // TODO: Integrate with Brevo (SendinBlue) API
    // Replace with your Brevo API configuration
    const BREVO_API_KEY = process.env.BREVO_API_KEY || 'YOUR_BREVO_API_KEY';
    const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

    const emailData = {
      sender: {
        name: 'Portfolio Contact Form',
        email: 'noreply@shaikmurad.com',
      },
      to: [
        {
          email: 'shaikmurad.design@gmail.com',
          name: 'Shaik Murad',
        },
      ],
      subject: `New Contact Form Submission from ${name}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Uncomment when you have Brevo API key configured
    /*
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    */

    // For now, just log the submission
    console.log('Contact form submission:', { name, email, phone, message });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
