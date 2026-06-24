
import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE (what users see under the bot name)
  // =========================
  // `status` options:
  // - "online"    = green dot
  // - "idle"      = yellow moon
  // - "dnd"       = red do-not-disturb
  // - "invisible" = appears offline
  presence: {
    // Current online state shown on Discord.
    status: "online",

    // Activity lines shown under the bot name.
    // `type` number mapping from Discord:
    // 0 = Playing
    // 1 = Streaming
    // 2 = Listening
    // 3 = Watching
    // 4 = Custom
    // 5 = Competing
    activities: [
      {
        // Text users will see (example: "Playing /help | Titan Bot").
        name: "x 1  ❤️",
        // Activity type number (0 = Playing).
        type: 0,
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    // Bot owner user IDs (comma-separated in OWNER_IDS env var).
    // Owners can access owner/admin-level bot commands.
    owners: process.env.OWNER_IDS?.split(",") || [],

    // Default wait time between command uses (in seconds).
    defaultCooldown: 3,

    // If true, old commands are removed before re-registering.
    deleteCommands: false,

    // Optional server ID used for testing slash commands quickly.
    testGuildId: process.env.TEST_GUILD_ID,

    // Command prefix for text-based commands (e.g., "!" for "!ping").
    // Supports both slash commands and prefix commands.
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    // Default questions shown when someone fills out an application.
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],

    // Embed colors by application status.
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // How long users must wait before submitting another application (hours).
    applicationCooldown: 24,

    // Auto-delete denied applications after this many days.
    deleteDeniedAfter: 7,

    // Auto-delete approved applications after this many days.
    deleteApprovedAfter: 30,

    // Role IDs allowed to manage applications.
    managerRoles: [], // Will be populated from environment or database
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  // IMPORTANT: This is the SINGLE SOURCE OF TRUTH for all bot colors
  embeds: {
    colors: {
      // Main brand colors.
      primary: "#336699",
      secondary: "#2F3136",

      // Standard status colors for success/error/warning/info messages.
      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      // Neutral utility colors.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // Discord-style palette shortcuts.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // Feature-specific colors.
      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      // Ticket priority color mapping.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // Default footer text used in bot embeds.
      text: "Titan Bot",
      // Footer icon URL (null = no icon).
      icon: null,
    },
    // Default thumbnail URL for embeds (null = no thumbnail).
    thumbnail: null,
    author: {
      // Optional default embed author block.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      // Currency display name.
      name: "coins",
      // Plural display name.
      namePlural: "coins",
      // Currency symbol shown in balances.
      symbol: "$",
    },

    // Starting balance for new users.
    startingBalance: 0,

    // Maximum bank amount before upgrades (if upgrades are used).
    baseBankCapacity: 100000,

    // Daily reward amount.
    dailyAmount: 100,

    // Work command random payout range.
    workMin: 10,
    workMax: 100,

    // Beg command random payout range.
    begMin: 5,
    begMax: 50,

    // Chance to succeed when robbing (0.4 = 40%).
    robSuccessRate: 0.4,

    // Jail time after failed rob (milliseconds).
    // 3600000 = 1 hour.
    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  // Add shop defaults here when needed.
  shop: {

  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    // Category ID where new tickets are created (null = no forced category).
    defaultCategory: null,

    // Role IDs allowed to manage/support tickets.
    supportRoles: [],

    // Priority options users/staff can assign.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "None",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Low",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Medium",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "High",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Urgent",
      },
    },

    // Default priority for new tickets.
    defaultPriority: "none",

    // Category ID where closed tickets are archived.
    archiveCategory: null,

    // Channel ID where ticket logs are sent.
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    // Default giveaway duration in milliseconds.
    // 86400000 = 24 hours.
    defaultDuration: 86400000,

    // Allowed winner count range.
    minimumWinners: 1,
    maximumWinners: 10,

    // Allowed giveaway duration range in milliseconds.
    // 300000 = 5 minutes.
    minimumDuration: 300000,
    // 2592000000 = 30 days.
    maximumDuration: 2592000000,

    // Role IDs allowed to host giveaways.
    allowedRoles: [],

    // Role IDs that bypass giveaway restrictions.
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    // Role ID given to users on their birthday.
    defaultRole: null,

    // Channel ID where birthday announcements are posted.
    announcementChannel: null,

    // Timezone used to calculate birthday dates.
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    // Message shown when posting the verification panel.
    defaultMessage: "Click the button below to verify yourself and gain access to the server!",

    // Text on the verification button.
    defaultButtonText: "Verify",
    // Automatic verification behavior.
    autoVerify: {
      // How automatic verification decides who is auto-approved:
      // - "none"        = everyone is auto-verified immediately
      // - "account_age" = account must be older than set days
      // - "server_size" = auto-verify everyone only in smaller servers
      defaultCriteria: "none",

      // Days used when `defaultCriteria` is `account_age`.
      defaultAccountAgeDays: 7,

      // Member count threshold used when `defaultCriteria` is `server_size`.
      // Example: 1000 means auto-verify if server has fewer than 1000 members.
      serverSizeThreshold: 1000,

      // Allowed safety limits for account-age requirements.
      // 1 = minimum day, 365 = maximum days.
      minAccountAge: 1,
      maxAccountAge: 365,

      // If true, user receives a DM after verification.
      sendDMNotification: true,

      // Human-readable descriptions for each criteria mode.
      criteria: {
        account_age: "Account must be older than specified days",
        server_size: "All users if server has less than 1000 members",
        none: "All users immediately"
      }
    },

    // Minimum time between verification attempts (milliseconds).
    // 5000 = 5 seconds.
    verificationCooldown: 5000,

    // Maximum failed attempts allowed inside the time window below.
    maxVerificationAttempts: 3,

    // Time window for counting attempts (milliseconds).
    // 60000 = 1 minute.
    attemptWindow: 60000,

    // In-memory safety limits (helps avoid unbounded memory growth).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // Cleanup frequency for cooldown/attempt maps (milliseconds).
    // 300000 = 5 minutes.
    cooldownCleanupInterval: 300000,
    // Maximum metadata payload size for audit entries (bytes).
    maxAuditMetadataBytes: 4096,
    // Maximum number of audit entries kept in memory.
    maxInMemoryAuditEntries: 1000,
    // If true, log every verification action.
    logAllVerifications: true,
    // If true, preserve verification audit history.
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    // Welcome template posted when a user joins.
    // Placeholders: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "Welcome {user} to {server}! We now have {memberCount} members!",
    // Goodbye template posted when a user leaves.
    // Placeholders: {user}, {memberCount}
    defaultGoodbyeMessage:
      "{user} has left the server. We now have {memberCount} members.",
    // Channel ID for welcome messages.
    defaultWelcomeChannel: null,
    // Channel ID for goodbye messages.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      // Default naming/description templates for counter entries.
      name: "{name} Counter",
      description: "Server {name} counter",
      // Channel type used for counters (typically "voice").
      type: "voice",
      // Channel name format. `{count}` is replaced automatically.
      channelName: "{name}-{count}",
    },
    permissions: {
      // Default denied permissions for the counter channel.
      deny: ["VIEW_CHANNEL"],
      // Default allowed permissions for the counter channel.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // Default response messages for counter actions.
      created: "✅ Created counter **{name}**",
      deleted: "🗑️ Deleted counter **{name}**",
      updated: "🔄 Updated counter **{name}**",
    },
    types: {
      // Built-in counter types and how each count is calculated.
      members: {
        name: "👥 Members",
        description: "Total members in the server",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Bots",
        description: "Total bot accounts in the server",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Humans",
        description: "Total human members (non-bots)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission: "You do not have permission to use this command.",
    cooldownActive: "Please wait {time} before using this command again.",
    errorOccurred: "An error occurred while executing this command.",
    missingPermissions:
      "I am missing required permissions to perform this action.",
    commandDisabled: "This command has been disabled.",
    maintenanceMode: "The bot is currently in maintenance mode.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  // Set any feature to `false` to disable it globally.
  features: {
    // Core systems.
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    // Community engagement systems.
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    // Security and self-service systems.
    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    // Utility/quality-of-life modules.
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push("PostgreSQL host is required in production (POSTGRES_HOST environment variable)");
    }
    if (!process.env.POSTGRES_USER) {
      errors.push("PostgreSQL user is required in production (POSTGRES_USER environment variable)");
    }
    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("PostgreSQL password is required in production (POSTGRES_PASSWORD environment variable)");
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;

/**
 * 🎮 Minecraft Admin Bot - Advanced
 *
 * بوت ماينكرافت متقدم مع أوامر Ban/Kick
 * يتحكم من ديسكورد أو من اللعبة
 *
 * الميزات:
 * - Ban/Kick Players
 * - 24/7 Keep Alive
 * - Discord Control Panel
 * - Auto Reconnect
 * - Anti-AFK Protection
 */

const mineflayer = require('mineflayer');
const { pathfinder, Movements } = require('mineflayer-pathfinder');
const Discord = require('discord.js');

// ========== إعدادات ماينكرافت ==========
const MC_SERVER = {
    host: 'X1XC.aternos.me',
    port: 56576,
    username: 'AdminBot_' + Math.floor(Math.random() * 9000 + 1000),
    version: false
};
// =====================================

// ========== إعدادات ديسكورد ==========
const DISCORD = {
    token: 'MTUxOTQzMzA5NTkzMjE0OTg1NA.GYFsId.IMJu4CrcsF9Vq800qNiUJGCUta6mb46C7QU-tg',  // حط الـ Token هنا
    prefix: '!',
    adminRole: 'Admin',  // اسم الرول المسموح
    channelId: 1519433095932149854  // حط Channel ID هنا
};
// =====================================

// ألوان
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

// حالة البوت
let mcBot;
let discordClient;
let reconnectAttempts = 0;
const MAX_RECONNECT = 100;
let isConnected = false;
let playerList = [];

// ========== دوال تسجيل ==========
function log(message, type = 'INFO') {
    const timestamp = new Date().toLocaleTimeString();
    const typeColors = {
        'MC': colors.cyan,
        'DISCORD': colors.magenta,
        'BAN': colors.red,
        'KICK': colors.yellow,
        'SUCCESS': colors.green,
        'ERROR': colors.red,
        'WARNING': colors.yellow,
        'INFO': colors.blue
    };
    const color = typeColors[type] || colors.reset;
    console.log(`${colors.cyan}[${timestamp}]${colors.reset} ${color}[${type}]${colors.reset} ${message}`);
}

// ========== بوت ماينكرافت ==========
function createMCBot() {
    log(`جاري إنشاء بوت ماينكرافت: ${MC_SERVER.username}`, 'MC');

    mcBot = mineflayer.createBot({
        host: MC_SERVER.host,
        port: MC_SERVER.port,
        username: MC_SERVER.username,
        version: MC_SERVER.version,
        hideErrors: false,
        checkTimeoutInterval: 120000
    });

    mcBot.loadPlugin(pathfinder);

    // عند الدخول
    mcBot.once('spawn', () => {
        isConnected = true;
        reconnectAttempts = 0;
        log(`✅ تم الدخول! البوت Online`, 'SUCCESS');
        log(`   السيرفر: ${MC_SERVER.host}:${MC_SERVER.port}`, 'MC');
        log(`   اللاعب: ${mcBot.username}`, 'MC');
        updatePlayerList();
        startAFKProtection();
        sendDiscordMessage(`🎮 **MC Bot is Online!**\nServer: ${MC_SERVER.host}\nPlayer: ${mcBot.username}`);
    });

    // عند سماع رسالة
    mcBot.on('chat', (username, message) => {
        log(`[CHAT] ${username}: ${message}`, 'MC');

        // تجاهل رسائل البوت
        if (username === mcBot.username) return;

        // أمر البنش من اللعبة
        if (message.startsWith('!!ban ')) {
            const target = message.slice(6).trim();
            banPlayer(target, username);
        }

        if (message.startsWith('!!kick ')) {
            const target = message.slice(7).trim();
            kickPlayer(target, username);
        }

        if (message.startsWith('!!players')) {
            const players = Object.keys(mcBot.players);
            mcBot.chat(`Players Online (${players.length}): ${players.join(', ')}`);
        }

        if (message.startsWith('!!help')) {
            mcBot.chat('Commands: !!ban <player> !!kick <player> !!players !!status');
        }

        if (message.startsWith('!!status')) {
            mcBot.chat(`Bot Status: Online ✅ | Players: ${Object.keys(mcBot.players).length}`);
        }
    });

    // عند خروج لاعب
    mcBot.on('playerLeft', (player) => {
        log(`👋 خروج اللاعب: ${player.username}`, 'MC');
        updatePlayerList();
        sendDiscordMessage(`👋 **Player Left:** ${player.username}\nOnline: ${playerList.length}`);
    });

    // عند دخول لاعب
    mcBot.on('playerJoined', (player) => {
        log(`🎉 دخول اللاعب: ${player.username}`, 'MC');
        updatePlayerList();
        sendDiscordMessage(`🎉 **Player Joined:** ${player.username}\nOnline: ${playerList.length}`);
    });

    // عند الموت
    mcBot.on('death', () => {
        log('💀 البوت موته! جاري إعادة الظهور...', 'WARNING');
        mcBot.chat('Respawning...');
    });

    // عند خطأ
    mcBot.on('error', (err) => {
        log(`خطأ: ${err.message}`, 'ERROR');
    });

    // عند قطع الاتصال
    mcBot.on('end', (reason) => {
        isConnected = false;
        log(`انقطع الاتصال: ${reason}`, 'WARNING');
        sendDiscordMessage(`⚠️ **MC Bot Disconnected!**\nReason: ${reason}`);
        handleReconnect();
    });

    mcBot.on('kicked', (reason) => {
        isConnected = false;
        log(`تم طرد البوت: ${reason}`, 'ERROR');
        sendDiscordMessage(`🚫 **Bot Kicked!**\nReason: ${reason}`);
        handleReconnect();
    });
}

// ========== أوامر الباند والكيك ==========

function banPlayer(username, admin) {
    if (!mcBot || !isConnected) {
        log('البوت ما متصل!', 'ERROR');
        return;
    }

    log(`🔨 BAN: ${username} by ${admin}`, 'BAN');

    try {
        // أمر البنش في ماينكرافت
        mcBot.chat(`/ban ${username}`);
        mcBot.chat(`Player ${username} has been banned! 🔨`);

        sendDiscordMessage(`🚫 **BAN EXECUTED**\nPlayer: ${username}\nAdmin: ${admin}\nServer: ${MC_SERVER.host}`);

        log(`✅ تم بند ${username} بنجاح`, 'SUCCESS');
    } catch (e) {
        log(`فشل بند اللاعب: ${e.message}`, 'ERROR');
    }
}

function kickPlayer(username, admin) {
    if (!mcBot || !isConnected) {
        log('البوت ما متصل!', 'ERROR');
        return;
    }

    log(`👢 KICK: ${username} by ${admin}`, 'KICK');

    try {
        // أمر الكيك في ماينكرافت
        mcBot.chat(`/kick ${username}`);
        mcBot.chat(`Player ${username} has been kicked! 👢`);

        sendDiscordMessage(`👢 **KICK EXECUTED**\nPlayer: ${username}\nAdmin: ${admin}`);

        log(`✅ تم كيك ${username} بنجاح`, 'SUCCESS');
    } catch (e) {
        log(`فشل كيك اللاعب: ${e.message}`, 'ERROR');
    }
}

function updatePlayerList() {
    if (mcBot && mcBot.players) {
        playerList = Object.keys(mcBot.players);
    }
}

// ========== حماية Anti-AFK ==========
function startAFKProtection() {
    log('بدء حماية Anti-AFK...', 'MC');

    setInterval(() => {
        if (!mcBot || !isConnected) return;

        try {
            // حركة عشوائية
            mcBot.setControlState('forward', true);
            setTimeout(() => mcBot.setControlState('forward', false), 800);

            // قفز أحياناً
            if (Math.random() > 0.5) {
                setTimeout(() => {
                    mcBot.setControlState('jump', true);
                    setTimeout(() => mcBot.setControlState('jump', false), 500);
                }, 400);
            }

            log('البوت يتحرك (Anti-AFK)', 'MC');
        } catch (e) {
            // ignore
        }
    }, 120000); // كل 2 دقيقة
}

// ========== إعادة الاتصال ==========
function handleReconnect() {
    if (reconnectAttempts >= MAX_RECONNECT) {
        log('تم الوصول للحد الأقصى من محاولات إعادة الاتصال', 'ERROR');
        sendDiscordMessage('❌ **Bot Stopped!** Max reconnect attempts reached.');
        return;
    }

    reconnectAttempts++;
    const delay = Math.min(15000 * reconnectAttempts, 60000);

    log(`جاري إعادة الاتصال خلال ${delay/1000} ثانية... (${reconnectAttempts}/${MAX_RECONNECT})`, 'WARNING');

    setTimeout(() => {
        createMCBot();
    }, delay);
}

// ========== بوت ديسكورد ==========
function createDiscordBot() {
    log('جاري إنشاء بوت ديسكورد...', 'DISCORD');

    discordClient = new Discord.Client({
        intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES,
            Discord.Intents.FLAGS.MESSAGE_CONTENT
        ]
    });

    discordClient.on('ready', () => {
        log(`✅ ديسكورد Bot Online: ${discordClient.user.tag}`, 'DISCORD');
    });

    // أوامر ديسكورد
    discordClient.on('messageCreate', (message) => {
        if (message.author.bot) return;
        if (!message.content.startsWith(DISCORD.prefix)) return;

        const args = message.content.slice(DISCORD.prefix.length).trim().split(' ');
        const command = args[0].toLowerCase();

        // فحص إذا المستخدم عنده صلاحية
        const hasPermission = message.member && (
            message.member.roles.cache.some(role => role.name === DISCORD.adminRole) ||
            message.member.hasPermission('ADMINISTRATOR')
        );

        switch (command) {
            case 'mcstatus':
                const statusEmbed = new Discord.MessageEmbed()
                    .setTitle('🎮 Minecraft Bot Status')
                    .setColor(isConnected ? '#00ff00' : '#ff0000')
                    .addField('Status', isConnected ? '✅ Online' : '❌ Offline')
                    .addField('Server', `${MC_SERVER.host}:${MC_SERVER.port}`)
                    .addField('Players Online', playerList.length)
                    .addField('Player List', playerList.length > 0 ? playerList.join('\n') : 'No players')
                    .addField('Uptime', `${reconnectAttempts} reconnects`);
                message.channel.send(statusEmbed);
                break;

            case 'mcplayers':
                if (!isConnected) {
                    message.reply('❌ البوت ما متصل!');
                    return;
                }
                message.reply(`🎮 اللاعبون Online (${playerList.length}):\n${playerList.join('\n') || 'لا أحد'}`);
                break;

            case 'ban':
                if (!hasPermission) {
                    message.reply('❌ ما عندك صلاحية!');
                    return;
                }
                if (!args[1]) {
                    message.reply('❌ حط اسم اللاعب!\nUsage: !ban <player_name>');
                    return;
                }
                banPlayer(args[1], message.author.tag);
                message.reply(`🚫 تم بند ${args[1]}!`);
                break;

            case 'kick':
                if (!hasPermission) {
                    message.reply('❌ ما عندك صلاحية!');
                    return;
                }
                if (!args[1]) {
                    message.reply('❌ حط اسم اللاعب!\nUsage: !kick <player_name>');
                    return;
                }
                kickPlayer(args[1], message.author.tag);
                message.reply(`👢 تم كيك ${args[1]}!`);
                break;

            case 'banlist':
                if (!isConnected) {
                    message.reply('❌ البوت ما متصل!');
                    return;
                }
                message.reply('📋 جاري جلب قائمة الباند...');
                mcBot.chat('/banlist');
                break;

            case 'help':
                const helpEmbed = new Discord.MessageEmbed()
                    .setTitle('📚 أوامر البوت')
                    .setColor('#0099ff')
                    .addField('!mcstatus', 'حالة البوت')
                    .addField('!mcplayers', 'قائمة اللاعبين')
                    .addField('!ban <name>', 'بند لاعب (للمديرين)')
                    .addField('!kick <name>', 'كيك لاعب (للمديرين)')
                    .addField('!help', 'عرض هذه القائمة')
                    .setFooter('⚠️ أوامر Ban/Kick تحتاج صلاحية Admin');
                message.channel.send(helpEmbed);
                break;

            default:
                message.reply('❌ أمر غير معروف! اكتب !help للمساعدة');
        }
    });

    discordClient.login(DISCORD.token).catch(err => {
        log(`خطأ بديسكورد: ${err.message}`, 'ERROR');
        log('البوت يشتغل بدون ديسكورد...', 'WARNING');
    });
}

function sendDiscordMessage(text) {
    if (discordClient && DISCORD.channelId) {
        const channel = discordClient.channels.cache.get(DISCORD.channelId);
        if (channel) {
            channel.send(text);
        }
    }
}

// ========== تشغيل ==========
function main() {
    console.log('╔════════════════════════════════════════╗');
    console.log('║   🎮 Minecraft Admin Bot - Advanced   ║');
    console.log('║        Ban/Kick/Keep Alive 24/7        ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('');

    // تشغيل بوت ماينكرافت
    createMCBot();

    // تشغيل بوت ديسكورد
    createDiscordBot();

    // أمر الإيقاف
    process.on('SIGINT', () => {
        log('جاري إيقاف البوت...', 'INFO');
        if (mcBot) mcBot.quit('Bot shutting down');
        if (discordClient) discordClient.destroy();
        process.exit(0);
    });
}

main();
