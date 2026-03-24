import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    constructor(
        private mailerService: MailerService,
        private config: ConfigService
    ) {}

    async sendContactEmail(data: { name: string, email: string, message: string }) {
        const { name, email, message } = data;

        await this.mailerService.sendMail({
            to: this.config.get<string>("EMAIL_USER"),
            from: this.config.get<string>("EMAIL_USER"),
            subject: `New message from ${name}`,
            html: `
            <div style="margin:0; padding:48px 0; background:#0b1220; font-family:Arial, sans-serif;">

                <!-- Outer Container -->
                <div style="max-width:640px; margin:auto; background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 30px 80px rgba(0,0,0,0.35);">

                    <!-- Header -->
                    <div style="padding:26px; background:linear-gradient(135deg,#111827,#1f2937);">

                    <div style="font-size:12px; letter-spacing:2px; color:#9ca3af;">
                        NEW INQUIRY
                    </div>

                    <h2 style="margin:8px 0 0; font-size:20px; color:#ffffff; font-weight:600;">
                        Portfolio Contact Submission
                    </h2>

                    <p style="margin:6px 0 0; font-size:13px; color:#cbd5e1;">
                        A new message has been received via your website
                    </p>

                    </div>

                    <!-- Body -->
                    <div style="padding:28px;">

                    <!-- Name + Email Grid -->
                    <div style="display:block; margin-bottom:18px;">

                        <div style="margin-bottom:14px;">
                        <p style="margin:0; font-size:12px; color:#64748b; letter-spacing:0.5px;">NAME</p>
                        <p style="margin:4px 0 0; font-size:15px; font-weight:600; color:#0f172a;">
                            ${name}
                        </p>
                        </div>

                        <div>
                        <p style="margin:0; font-size:12px; color:#64748b; letter-spacing:0.5px;">EMAIL</p>
                        <p style="margin:4px 0 0; font-size:15px; font-weight:600; color:#0f172a;">
                            ${email}
                        </p>
                        </div>

                    </div>

                    <!-- Divider -->
                    <div style="height:1px; background:#e2e8f0; margin:22px 0;"></div>

                    <!-- Message Section -->
                    <div>
                        <p style="margin:0 0 10px; font-size:12px; color:#64748b; letter-spacing:0.5px;">
                        MESSAGE
                        </p>

                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:16px;">
                        <p style="margin:0; font-size:14px; color:#334155; line-height:1.7; white-space:pre-wrap;">
                            ${message}
                        </p>
                        </div>

                    </div>

                    </div>

                    <!-- Footer -->
                    <div style="padding:16px 28px; background:#f1f5f9; border-top:1px solid #e2e8f0; text-align:center;">

                    <p style="margin:0; font-size:12px; color:#64748b;">
                        Automated notification from Eorico Portfolio System • Please do not reply
                    </p>

                    </div>

                </div>

                </div>
            `
        });
    }

    async sendAutoReplyEmai(data: { name: string, email: string }) {
        const { name, email } = data;
        
        await this.mailerService.sendMail({
            to: email,
            from: this.config.get<string>("EMAIL_USER"),
            subject: `Thanks for reaching out, ${name}`,

            html: `
            <div style="margin:0; padding:40px 0; background:linear-gradient(135deg,#0f172a,#1e293b); font-family:Arial, sans-serif;">

                <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,0.25);">

                    <!-- Header -->
                    <div style="background:linear-gradient(135deg,#22c55e,#16a34a); padding:26px; text-align:center;">
                    <div style="font-size:28px;">✅</div>
                    <h2 style="margin:8px 0 0; color:white; font-size:20px;">
                        Message Received
                    </h2>
                    <p style="margin:6px 0 0; color:rgba(255,255,255,0.85); font-size:13px;">
                        I’ll get back to you shortly
                    </p>
                    </div>

                    <!-- Content -->
                    <div style="padding:26px;">

                    <p style="margin:0; font-size:15px; color:#0f172a;">
                        Hi <strong>${name}</strong>,
                    </p>

                    <p style="margin-top:14px; font-size:14px; color:#334155; line-height:1.7;">
                        Thanks for reaching out! I’ve successfully received your message and I truly appreciate you taking the time to contact me.
                    </p>

                    <div style="margin:18px 0; padding:14px; background:#f8fafc; border-left:4px solid #22c55e; border-radius:10px;">
                        <p style="margin:0; font-size:13px; color:#475569;">
                        💡 I usually respond within 24–48 hours depending on workload.
                        </p>
                    </div>

                    <p style="margin:0; font-size:14px; color:#334155; line-height:1.7;">
                        If your message is urgent, feel free to follow up or resend it.
                    </p>

                    </div>

                    <!-- Footer -->
                    <div style="padding:16px 24px; background:#f1f5f9; text-align:center;">
                    <p style="margin:0; font-size:12px; color:#64748b;">
                        Automated response from Eorico’s Portfolio System
                    </p>
                    </div>

                </div>

            </div>
                            `
        })
    }
}
