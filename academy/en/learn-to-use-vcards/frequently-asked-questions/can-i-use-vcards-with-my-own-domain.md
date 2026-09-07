# Can I use vcards with my own domain?

**Yes**, it is possible to use the vcard system under a subdomain of your property.

For example, if you own the domain **my-company.com**, you could access your vcards under any subdomain, such as **vcards.my-company.com**. On your end, you would only need to create an entry in your DNS service as follows.

```
type: CNAME
name: vcards.my-company.com
value: vcards-go.tictap.me
```

After making this change, you will need to notify us that you wish to use your own subdomain so we can update the URLs of your cards.
