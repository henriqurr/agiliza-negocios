import nodemailer from 'nodemailer';

export default async function sendEmail(req: Request, email: string): Promise<Response> {
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use variáveis de ambiente
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Contato recebido',
        text: `Detalhes do Formulário: ${JSON.stringify(req.body)}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'E-mail enviado com sucesso!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Erro ao enviar e-mail', error);
        return new Response(JSON.stringify({ message: 'Erro ao enviar e-mail' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
