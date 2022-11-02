<template>
    <div>
        <h1>Post List</h1>
        <table border="2">
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            <tr v-for="user in user_list" :key="user.userId">
                <td>{{user.title}}</td>
                <td>{{user.body}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user_list : [],
        }
    },
    created()
    {
        this.user_list = this.$store.getters.GET_USER_LIST.slice(0,20);
    }
}
</script>
<style scoped>
    tr:nth-child(even){
        background:powderblue;
    }
</style>