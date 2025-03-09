// UptimeFlare/worker/src/telegram.ts

export async function sendTelegramMessage(
  token: string,
  chatId: string,
  message: string
): Promise<void> {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const result = await response.json();
    if (result.ok) {
      console.log(`::info::Telegram 消息发送成功: ${message}`);
    } else {
      console.error(`::error::Telegram 消息发送失败: ${JSON.stringify(result)}`);
    }
  } catch (error: any) {
    console.error(`::error::Telegram 消息发送异常: ${error.message}`);
  }
}
