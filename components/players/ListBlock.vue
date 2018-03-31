<template>
  <div class="toh-panel hoverable">
    <div class="player-list-block">
        <div class="player-list-image-block">
            <img :src="rec.image">
            <div class="game-icon">
                <i class="icon-inline" :class="[rec.game]"></i>
            </div>
        </div>
        <div class="player-list-content">
            <div class="player-name">{{rec.title}}</div>
            <div class="player-details">
                <span v-for="(det, i) in rec.details" :key="i" :class="{'primary': det.primary}">
                    <i v-if="det.icon != undefined" class="icon-inline" :class="det.icon.class"></i>
                    {{(det.trans == true) ? $t(det.trans_group + '.' + det.value) : det.value}}
                </span>
            </div>
            <div class="player-textline">{{rec.mini_desc}}</div>
        </div>
        <div class="player-list-arrow">
            <i class="icon-inline chevron-right"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBlock',
  props: ['rec'],
  methods: {

  }
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
            margin-bottom: 4px;
        }

        .player-details{
            color: @tohLightGreyColor;
            font-size: 14px;
            margin-bottom: 4px;
            line-height: 17px;

            >span{
                margin-right: 10px;

                &.primary{
                    color: @tohPrimaryHover;
                }
            }
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
            background-color: @tohShadow;
        }
    }
</style>

