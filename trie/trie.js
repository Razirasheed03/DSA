class TrieNode{
    constructor(){
        this.children={}
        this.endOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.endOfWord=true
    }
    prefix(word){
        let node=this.root
        for(let char of word){
            if(!(char in node.children)){
                return false
            }
            node=node.children[char]
        }
        return true
    }
    findLongestCommonPrefix() {
        let prefix = "";
        let node = this.root;
        while (node) {
            let keys = Object.keys(node.children);
            if (keys.length !== 1 || node.isEndOfWord) break;
            let nextChar = keys[0];
            prefix += nextChar;
            node = node.children[nextChar];
        }
        return prefix;
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!(char in node.children)){
                return false
            }
            node=node.children[char]
        }
        return node.endOfWord
    }
}
const trie=new Trie()
trie.insert('Apple')
trie.insert('Ape')
trie.insert('Cat')
trie.insert('Bat')