// noinspection SpellCheckingInspection

export default [
    [
        [
            'UnlockTime',
            'SpawnLifetime',
            'ActivationDelay',
            'ActivationPrep',
            'RedStarLifeExtention',
            'TimeToFullyRegen',
            'ShieldRegenDelay',
            'DesignUpgradeTime',
            'MaxDPSTime',
            'DockedObjectDestroyTime',
            'DisableTime',
            'SectorUnlockTime',
            'TimeToUpgrade',
            'TimeToResearch',
            'TimeToLoad',
            'Lifetime',
            'ConstructionTime',
            'TimeSpeedupMaxSeconds',
            'TimeSpeedupRegenPerDay',
            'SpawnDelay',
            'MoveUpdateSec',
            'BlueStar_CRRewardWinLimitPeriod',
            'WSLostBSTimeCooldown',
            'WSLostOtherTimeCooldown',
            'WSJumpBSTimeCooldown',
            'WSJumpOtherTimeCooldown',
            'ProximityTriggerSec',
            'EMPResist',
            'SpawnFleetIntervalSeconds',
            'ShieldRegenTimeAfterDamage',
            'SectorEnrichCooldownSeconds',
            'TurretSetupTime',
            'RelicLoad',
            'RSPublicLateJoin_TimeAvailable',
            'SectorGenesisCooldownSeconds',
            'AIUpdateIntervalSeconds',
            'HydroCloneLifetimeSec',
            'WSLostShipTimeCooldown',
            'WSDisbandCooldown',
            'DPSRampTimes',
            // 'ActivationDelayBLS', // хз какой там кооф
        ],
        (v) => v,
    ],
    [
        ['APTPIOTTP'], //  заменить на DispatchActivTicks
        (v) => v / 5,
    ],
    [
        ['EffectDurationx10'],
        (v) => v / 10,
    ],
    [
        ['TargetSwitchTicks', 'MirrorShieldTickPeriod', 'DispatchActivTicks', 'RelicLoadTicks'],
        (v, {TicksPerSecond}) => v / TicksPerSecond,
    ],
    [
        ['RSLESecPer500Hydro'],
        (v) => v * 3,
    ],
]
