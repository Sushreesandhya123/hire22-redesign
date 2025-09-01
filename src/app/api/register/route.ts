import { NextRequest, NextResponse } from 'next/server'

export interface RegistrationData {
  companyName: string
  contactPersonName: string
  email: string
  mobileNumber: string
}

// In-memory storage for demo (replace with database in production)
const registrations: (RegistrationData & { id: string; timestamp: string })[] = []

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationData = await request.json()
    
    // Validate required fields
    const { companyName, contactPersonName, email, mobileNumber } = body
    
    if (!companyName || !contactPersonName || !email || !mobileNumber) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'All fields are required' 
        },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please enter a valid email address' 
        },
        { status: 400 }
      )
    }

    // Basic mobile validation (Indian format)
    const mobileRegex = /^(\+91|91|0)?[6789]\d{9}$/
    if (!mobileRegex.test(mobileNumber.replace(/\s+/g, ''))) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please enter a valid Indian mobile number' 
        },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingRegistration = registrations.find(reg => reg.email.toLowerCase() === email.toLowerCase())
    if (existingRegistration) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email already registered' 
        },
        { status: 409 }
      )
    }

    // Create new registration
    const newRegistration = {
      id: `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      companyName: companyName.trim(),
      contactPersonName: contactPersonName.trim(),
      email: email.trim().toLowerCase(),
      mobileNumber: mobileNumber.trim(),
      timestamp: new Date().toISOString()
    }

    // Save registration (in production, save to database)
    registrations.push(newRegistration)

    // Log registration for debugging
    console.log('New registration:', newRegistration)

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      data: {
        id: newRegistration.id,
        message: 'Registration successful! We\'ll contact you within 24 hours.'
      }
    })

  } catch (error) {
    console.error('Registration API error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// GET method to retrieve all registrations (for admin/debugging)
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        total: registrations.length,
        registrations: registrations.map(reg => ({
          ...reg,
          // Hide sensitive info in response
          mobileNumber: reg.mobileNumber.replace(/(\d{6})\d{4}/, '$1****')
        }))
      }
    })
  } catch (error) {
    console.error('Get registrations error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch registrations' 
      },
      { status: 500 }
    )
  }
}