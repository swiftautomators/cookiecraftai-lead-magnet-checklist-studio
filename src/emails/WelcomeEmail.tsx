import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Button,
} from '@react-email/components';

interface WelcomeEmailProps {
    userEmail: string;
}

export const WelcomeEmail = ({ userEmail }: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Your Cookie Business Checklist is here! 🍪</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>Welcome to CookieCraft AI!</Heading>
                <Text style={text}>
                    Hi there {userEmail},
                </Text>
                <Text style={text}>
                    Thank you for requesting the <strong>Cookie Business Startup Checklist</strong>. We&apos;re excited to see what you&apos;ll bake up!
                </Text>
                <Section style={btnContainer}>
                    <Button
                        style={button}
                        href="https://checklist.cookiecraftai.com/checklist.pdf"
                    >
                        Download Your Checklist
                    </Button>
                </Section>
                <Text style={text}>
                    If the button doesn&apos;t work, copy this link into your browser:
                    <br />
                    <Link href="https://checklist.cookiecraftai.com/checklist.pdf" style={link}>
                        https://checklist.cookiecraftai.com/checklist.pdf
                    </Link>
                </Text>
                <Text style={footer}>
                    Happy Baking!
                    <br />
                    - The CookieCraft AI Team
                </Text>
            </Container>
        </Body>
    </Html>
);

export default WelcomeEmail;

const main = {
    backgroundColor: '#ffffff',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '580px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingBottom: '20px',
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
};

const btnContainer = {
    textAlign: 'center' as const,
    marginTop: '32px',
    marginBottom: '32px',
};

const button = {
    backgroundColor: '#a67c52', // cookie-500
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
    padding: '12px',
};

const link = {
    color: '#a67c52',
    textDecoration: 'underline',
};

const footer = {
    color: '#898989',
    fontSize: '14px',
    marginTop: '32px',
};
