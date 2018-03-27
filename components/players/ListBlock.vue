<template>
  <div class="toh-panel hoverable">
    <div class="player-list-block">
        <div class="player-list-image-block">
            <img src="https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000001644.png">
            <div class="game-icon">
                <i class="icon-inline wow"></i>
            </div>
        </div>
        <div class="player-list-content">
            <div class="player-name">Player #1</div>
            <div class="player-details">Европа / Ищу группу / PC</div>
            <div class="player-textline">Тут будет мое офигенное описание, которое может растягиваться на сколько угодно, но все же не быть слишком длинным.</div>
        </div>
        <div class="player-list-arrow">
            <i class="icon-inline chevron-right"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBlock'
}
</script>

<style lang="less">
    .player-list-block{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .player-list-block .player-list-image-block{
        height: 65px;
        width: 65px;
        margin-right: 15px;
        position: relative;
    }

    .player-list-block .player-list-image-block img{
        height: 65px;
        width: 65px;
        border-radius: 100%;
    }

    .player-list-block .player-list-image-block .game-icon{
        position: absolute;
        left: -2px;
        bottom: -4px;
        font-size: 26px;
    }

    .player-list-block .player-list-content{
        flex: 1 100%;
        text-align: left;
        min-width: 0;

        .player-name{
            font-size: 17px;
            color: @tohLightText;
            font-weight: bold;
            line-height: 20px;
            margin-bottom: 5px;
        }

        .player-details{
            color: @tohLightGreyColor;
            font-size: 14px;
            margin-bottom: 3px;
            line-height: 17px;
        }

        .player-textline{
            color: @tohGreyColor; 
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
        }
    }

    .player-list-block .player-list-arrow{
        font-size: 15px;

        .icon-inline{
            background-color: fade(@tohLightGreyColor, 40%);
        }
    }
</style>

