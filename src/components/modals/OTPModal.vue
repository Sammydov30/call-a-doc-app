<template>
    <ModalDefaultVue  variant="variant" :visible="visible">        
        <slot></slot>
    </ModalDefaultVue>
    
</template>
    
<script>
    import ModalDefaultVue from './ModalDefault.vue';
    export default {
        name: 'OTPModal',
        components:{
            ModalDefaultVue,
        },
        props: {
            // title: String,
            variant: String,
            visible: Boolean,
        },
    
    }
</script>