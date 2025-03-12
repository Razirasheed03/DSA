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
}
const trie=new Trie()
trie.insert('Apple')
trie.insert('Ape')
trie.insert('Cat')
trie.insert('Bat')