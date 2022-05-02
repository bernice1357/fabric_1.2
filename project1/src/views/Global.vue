<script>
const account = "";
const password = "";
const identity = 0;
const token="";
const role="";

export default {
    account,
    password,
    identity,
    token,
    role,
    setAccount(newAccount){
        this.account=newAccount;
        console.log(this.account);
    },
    setToken(newToken){
        this.token=newToken;
        console.log(this.token);
    },
    setRole(newRole){
        this.role=newRole;
        console.log(this.role);
    },
};
</script>
